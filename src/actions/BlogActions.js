export const addBlog = (blogData) => {
  return {
    type: "ADD_BLOG",
    payload: blogData
  };
};

export const updateBlog = (blogId, updatedData) => {
  return {
    type: "UPDATE_BLOG",
    payload: { id: blogId, updatedData }
  };
};

export const deleteBlog = (blogId) => {
  return {
    type: "DELETE_BLOG",
    payload: blogId
  };
};

export const likeBlog = (blogId) => {
  return {
    type: "LIKE_BLOG",
    payload: blogId
  };
};
