export async function onRequest({ request, next }) {
  const url = new URL(request.url);

  // pages.dev → 커스텀 도메인 301 리다이렉트 (중복 색인 방지)
  if (url.hostname.endsWith('.pages.dev')) {
    url.hostname = 'k-pop-muse.com';
    return Response.redirect(url.toString(), 301);
  }

  return next();
}
