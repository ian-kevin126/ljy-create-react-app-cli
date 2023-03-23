/**
 * 终端命令相关
 */
const { spawn } = require("child_process");

// 创建进程执行终端命令
const spawnCommand = (command, args, options) => {
  return new Promise((resolve, reject) => {
    // 通过 spawn 创建一个子进程，并把进程返回
    const childProcess = spawn(command, args, options);
    // 将子进程输出的东西放进当前进程的全局变量 process 的 stdout 中
    // 比如说，当子进程执行 npm install，执行完的时候，会输出一些信息
    // childProcess.stdout 就是这个输出信息流，通过 pipe 将流信息存到当前进程（主进程）
    childProcess.stdout.pipe(process.stdout);
    // 将子进程错误信息放进当前进程
    childProcess.stderr.pipe(process.stderr);

    childProcess.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(`错误：${code}`);
      }
    });
  });
};

module.exports = {
  spawnCommand,
};
