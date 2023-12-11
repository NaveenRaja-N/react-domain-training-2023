export const filterBlogsHelper = (blogData, selectedTypes, searchTerm) => {
    return blogData?.filter(blog => selectedTypes.includes(blog.type) && blog.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
};