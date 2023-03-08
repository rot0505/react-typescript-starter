module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  roots: ["<rootDir>/src"],
  moduleNameMapper: {
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^types/(.*)$": "<rootDir>/src/types/$1",
    "^api/(.*)$": "<rootDir>/src/api/$1"
  },
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.json"
    }
  }
};