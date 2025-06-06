/**
 * @title Reading system metrics
 * @difficulty beginner
 * @tags cli, deploy
 * @run -S <url>
 * @resource {https://docs.deno.com/api/deno/~/Deno.systemMemoryInfo} Doc: Deno.systemMemoryInfo
 * @resource {https://docs.deno.com/api/deno/~/Deno.loadavg} Doc: Deno.loadavg
 * @resource {https://docs.deno.com/api/deno/~/Deno.memoryUsage} Doc: Deno.memoryUsage
 * @group System
 *
 * This example demonstrates how to use Deno's built-in methods to read
 * system metrics such as memory information, load averages and memory usage.
 */

// Get metrics like total memory, free memory, available memory, memory used for buffers and caching,
// and swap space details. Values are converted from kilobytes (KB) to megabytes (MB) for better readability.
const memoryInfo = Deno.systemMemoryInfo();
console.log("System Memory Info:");
console.log(`Total Memory: ${memoryInfo.total / 1024 / 1024} MB`);
console.log(`Free Memory: ${memoryInfo.free / 1024 / 1024} MB`);
console.log(`Available Memory: ${memoryInfo.available / 1024 / 1024} MB`);
console.log(`Buffers: ${memoryInfo.buffers / 1024 / 1024} MB`);
console.log(`Cached: ${memoryInfo.cached / 1024 / 1024} MB`);
console.log(`Swap Total: ${memoryInfo.swapTotal / 1024 / 1024} MB`);
console.log(`Swap Free: ${memoryInfo.swapFree / 1024 / 1024} MB`);

// Load averages indicate the average number of active processes over these time periods, providing insights
// into the system's CPU load and overall activity.
const loadAvg = Deno.loadavg();
console.log("Load Averages:");
console.log(`1 Minute Load Average: ${loadAvg[0]}`);
console.log(`5 Minute Load Average: ${loadAvg[1]}`);
console.log(`15 Minute Load Average: ${loadAvg[2]}`);

// Get memory usage details such as external memory, resident set size (RSS), total heap size, and heap used.
const memoryUsage = Deno.memoryUsage();
console.log("Memory Usage:");
console.log(`External: ${memoryUsage.external / 1024 / 1024} MB`);
console.log(`RSS: ${memoryUsage.rss / 1024 / 1024} MB`);
console.log(`Heap Total: ${memoryUsage.heapTotal / 1024 / 1024} MB`);
console.log(`Heap Used: ${memoryUsage.heapUsed / 1024 / 1024} MB`);
