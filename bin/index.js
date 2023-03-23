#!/usr/bin/env node

const program = require("commander");

// 查看版本号
program.version(require("../package.json").version);

const helpOptions = require("../lib/core/help");
const createCommands = require("../lib/core/create");

// 帮助和可选信息
helpOptions();

// 创建指令
createCommands();

program.parse(process.argv);
