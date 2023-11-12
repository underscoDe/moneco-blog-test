export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;

export const STRAPI_API_TOKEN =
  'd0ec589228a83b6741a5760c80b2e415710b3aa035fda3bc4bf401c59a896f040ba653d7dd80fdf521f36bb3ef1760a652f5292d9fc38cdd83a53b148385a26743852c400b27b388d706f8e9f3efca39c0e366236363609854edefa05874bd7f127fd8802d882be6a96badf56147d49f01ef7fb049f3ba1de99cf598a7915d30';

export const STRAPI_URL = 'http://127.0.0.1:1337';
