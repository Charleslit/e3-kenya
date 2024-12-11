declare module "*.json" {
  const content: {
    [key: string]: unknown;
  };
  export default content;
} 