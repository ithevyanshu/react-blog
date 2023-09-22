const initialState = {
  blogs: JSON.parse(localStorage.getItem("blogs")) || [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_BLOG":
      const newBlogs = [...state.blogs, action.payload];
      localStorage.setItem("blogs", JSON.stringify(newBlogs)); 
      return { ...state, blogs: newBlogs };

    case "UPDATE_BLOG":
      const { id, updatedData } = action.payload;
      const updatedBlogs = state.blogs.map((blog) => {
        if (blog.id === Number(id)) {
          return { ...blog, ...updatedData };
        }
        return blog;
      });
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs)); 
      return { ...state, blogs: updatedBlogs };

    case "DELETE_BLOG":
      const updatedBlogsAfterDeletion = state.blogs.filter(
        (blog) => blog.id !== Number(action.payload)
      );
      localStorage.setItem(
        "blogs",
        JSON.stringify(updatedBlogsAfterDeletion)
      ); 
      return { ...state, blogs: updatedBlogsAfterDeletion };

    case "LIKE_BLOG":
      const updatedBlogsAfterLike = state.blogs.map((blog) => {
        if (blog.id === Number(action.payload)) {
          return { ...blog, likes: (blog.likes || 0) + 1 };
        }
        console.log(blog);
        return blog;
      });
      localStorage.setItem(
        "blogs",
        JSON.stringify(updatedBlogsAfterLike)
      );
      return { ...state, blogs: updatedBlogsAfterLike };
    default:
      return state;
  }
};

export default blogReducer;
