import { request } from '@/utils/request';

export function randomuser(params = {}) {
  return request.get('https://randomuser.me/api/', { params: { nat: 'us', ...params } });
}
