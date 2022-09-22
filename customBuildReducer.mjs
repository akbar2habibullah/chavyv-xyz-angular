import { chromium, devices } from "playwright";
import {
  existsSync,
  mkdirSync,
  writeFile,
  readdir,
  copyFile,
  readFile,
} from "fs";
import { copy } from "fs-extra";
import { resolve, extname } from "path";

const __dirname = resolve();

let css_list = new Set();
let css_file = {};

async function checkCoverage() {
  // body omitted
  const iphone12 = devices["iPhone 12"];
  const pixel = devices["Pixel 3"];
  const ipad = devices["iPad Mini"];
  const desktop = devices["Desktop Chrome"];

  const listDevices = [iphone12, pixel, ipad, desktop];

  const browser = await chromium.launch();

  for (const device of listDevices) {
    const context = await browser.newContext({
      ...device,
    });

    const page = await context.newPage();
    await page.coverage.startCSSCoverage();

    await page.goto("http://localhost:1668/");
    await page.waitForTimeout(5000);

    await page.locator("[aria-label='Timeline']").click();
    await page.locator("text=About Me").click();
    await page.locator("text=> Get my Resume").hover();
    await page.locator("text=UI Slicing with HTML5, SASS, & JSX").hover();
    await page.locator("text=Stockifi.io").click();
    await page.locator("#btn-toggle").click();
    await page
      .locator("[name='Odigo Landing Page link']")
      .hover({ force: true });
    await page.locator("#btn-toggle").click();
    await page.locator("[aria-label='Email']").click();
    await page.locator("[aria-label='Scully']").hover();

    const tmp = await page.coverage.stopCSSCoverage();

    tmp.forEach((entry) => {
      const dir = new URL(entry.url).pathname;

      if (!css_list.has(dir)) {
        css_list.add(dir);
        css_file[dir] = { text: entry.text, pathname: dir };
      }
    });
  }

  await browser.close();
}

function reduceUnusedCode() {
  // body omitted
  const new_dir = resolve(__dirname, "dist/static-coveraged");

  if (!existsSync(new_dir)) {
    mkdirSync(new_dir);
  }

  css_list.forEach((entry) => {
    writeFile(
      new_dir + entry,
      Buffer.from(css_file[entry].text, "utf8"),
      (error) => {
        if (error) {
          console.log("Error creating file:", entry.dir);
        }
      }
    );
  });
}

function copyStatic() {
  // body omitted
  const new_dir = resolve(__dirname, "./dist/static-coveraged");
  const static_dir = resolve(__dirname, "./dist/static");

  readdir(static_dir, { withFileTypes: true }, (err, files) => {
    if (files)
      for (const file of files) {
        if (
          (extname(file.name) !== ".css" &&
            extname(file.name) !== ".js" &&
            extname(file.name) !== ".map" &&
            extname(file.name) !== ".html") ||
          file.name === "ngsw-worker.js" ||
          file.name === "worker-basic.min.js"
        ) {
          copyFile(
            static_dir + "/" + file.name,
            new_dir + "/" + file.name,
            (err) => {
              if (err) console.log(err);
            }
          );
        }
      }
    else console.log(err);
  });
}

function copyAssets() {
  // body omitted
  const source = "dist/static/assets";
  const destination = "dist/static-coveraged/assets";

  copy(
    resolve(__dirname, source),
    resolve(__dirname, destination),
    function (err) {
      if (err) {
        console.log("An error occured while copying the folder.");
        return console.error(err);
      }
      console.log("Copy completed!");
      removeScriptCall();
    }
  );
}

function removeScriptCall() {
  // body omitted

  readFile("dist/static/index.html", function (err, data) {
    const new_html = new String(data).replace(/<script(.*?)<\/script>/g, "");
    writeFile("dist/static-coveraged/index.html", new_html, (err) => {
      console.log(err);
    });
  });

  readFile("dist/static/404.html", function (err, data) {
    const new_html = new String(data).replace(/<script(.*?)<\/script>/g, "");
    writeFile("dist/static-coveraged/404.html", new_html, (err) => {
      console.log(err);
    });
  });
}

checkCoverage().then(() => {
  reduceUnusedCode();
  copyStatic();
  copyAssets();
});