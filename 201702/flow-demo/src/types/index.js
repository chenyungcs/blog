/**
 * @flow
 * index
 * @author    : yunchen
 * @createdAt : 10/02/2018
 */

function assetWrapperBoolean(value: ?Boolean) {}

assetWrapperBoolean(new Boolean(1));
assetWrapperBoolean(false); // => error

function assetBoolean(value: boolean) {}

assetBoolean(new Boolean(1)); // => error
assetBoolean(false);

function getAdmin (id: 1) {}
getAdmin(); // => error
getAdmin(1);
getAdmin(null); // => error
