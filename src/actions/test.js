export function addAlbum(id, title) {
    return {
      type: 'ADD_ALBUM',
      payload: {
        id: id,
        title: title
      }
    }
  }