let BASE_URL: string;

const testMode = import.meta.env.MODE;

if (testMode === "testing") {
  BASE_URL = "http://testing.com";
} else if (testMode === "dev") {
  BASE_URL = "http://dev.com";
} else {
  BASE_URL = "http://production.com";
}

export { BASE_URL };
