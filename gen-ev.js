Starting Container

yarn run v1.22.22

$ node -e "require('fs').writeFileSync('.env', `DATABASE_URL=${process.env.DATABASE_URL}\nREDIS_URL=${process.env.REDIS_URL}\nSTRIPE_API_KEY=${process.env.STRIPE_API_KEY||''}\nSTRIPE_WEBHOOK_SECRET=${process.env.STRIPE_WEBHOOK_SECRET||''}\nJWT_SECRET=${process.env.JWT_SECRET||''}\nCOOKIE_SECRET=${process.env.COOKIE_SECRET||''}\nPORT=${process.env.PORT||9000}\n`)" && medusa db:setup && medusa start

/bin/sh: 1: Bad substitution

node:internal/errors:540

      throw error;

      ^

 

TypeError [ERR_INVALID_ARG_TYPE]: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received undefined

    at Object.writeFileSync (node:fs:2353:5)

    at [eval]:1:15

    at runScriptInThisContext (node:internal/vm:209:10)

    at node:internal/process/execution:118:14

    at [eval]-wrapper:6:24

    at runScript (node:internal/process/execution:101:62)

    at evalScript (node:internal/process/execution:136:3)

    at node:internal/main/eval_string:55:3 {

  code: 'ERR_INVALID_ARG_TYPE'

}

 

Node.js v22.11.0

error Command failed with exit code 1.
