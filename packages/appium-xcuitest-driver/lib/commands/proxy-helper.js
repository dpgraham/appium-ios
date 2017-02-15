import { errorFromCode, errors, routeToCommandName } from 'appium-base-driver';
import log from '../logger';
import B from 'bluebird';


let helpers = {}, extensions = {};

helpers.proxyCommand = async function (endpoint, method, body) {
  if (this.shutdownUnexpectedly) return;

  if (!endpoint) {
    log.errorAndThrow('Proxying requires an endpoint');
  } else if (method !== 'POST' && method !== 'GET' && method !== 'DELETE') {
    log.errorAndThrow('Proxying only works for GET, POST or DELETE requests');
  }

  if (!this.wda || !this.wda.jwproxy) {
    throw new Error("Can't call proxyCommand without proxy active");
  }

  const cmdName = routeToCommandName(endpoint, method);
  const timeout = this._getCommandTimeout(cmdName);
  let res = null;
  if (timeout) {
    log.debug(`Setting custom timeout to ${timeout} ms for "${cmdName}" command`);
    let isCommandExpired = false;
    res = await B.Promise.resolve(this.wda.jwproxy.command(endpoint, method, body))
                  .timeout(timeout)
                  .catch(B.Promise.TimeoutError, () => {
                    isCommandExpired = true;
                  });
    if (isCommandExpired) {
      const errMsg = `Appium did not get any response from "${cmdName}" command in ${timeout} ms`;
      await this.startUnexpectedShutdown(new errors.TimeoutError(errMsg));
      log.errorAndThrow(errMsg);
    }
  } else {
    res = await this.wda.jwproxy.command(endpoint, method, body);
  }

  // temporarily handle errors that can be returned
  if (res && res.status && parseInt(res.status, 10) !== 0) {
    throw errorFromCode(res.status, res.value);
  }

  return res;
};

Object.assign(extensions, helpers);
export { helpers };
export default extensions;
