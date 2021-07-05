async function listVideos() {
  const videos = await fetch(`https://api.youtube.com`).then((e) => {
    return e;
  }).then((err) => {
    return err;
  }).finally(() => {

  })

  try {
    const videos = await fetch(`https://api.youtube.com`);
  } catch {

  } finally {

  }

  return videos;
}