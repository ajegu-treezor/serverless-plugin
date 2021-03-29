
/**
 * This file declares a plugin for the Serverless framework.
 *
 * This lets us define magic variable resolvers :
 * - ${lower:"MyString"} => Transform "MyString" to "mystring" (very helpfull for S3 bucket name)
 * - ${upper:"MyString"} => Transform "MyString" to "MYSTRING"
 */

class ServerlessPlugin {

  constructor(serverless, options) {
    
    const strToLower = async (str) => str.split(':')[1].toLowerCase();
    const strToUpper = async (str) => str.split(':')[1].toUpperCase();

    this.variableResolvers = { 
        lower : strToLower,
        upper : strToUpper
    };

  }

}

module.exports = ServerlessPlugin;