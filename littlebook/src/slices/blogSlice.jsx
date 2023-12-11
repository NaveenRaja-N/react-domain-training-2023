import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getBlogs } from '../thunks/blogThunks';
import { filterBlogsHelper } from '../utils/littleBookUtils/blogFinder.jsx'

const updateFilteredBlogs = (blogData, selectedTypes, searchTerm) => {
    return blogData?.filter(blog => selectedTypes.includes(blog?.type?.toLocaleLowerCase()) && blog?.title?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));

};
const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogData: [],
        filteredBlogData: [],
        allBlogTypes: [],
        selectedBlogTypes: [],
        searchTerm: '',
        currentBlog: {},
        error: null,
        scrollTop: true,
        searchTermBlog: [],
        isSearchActive: false,
        filters: [],
        isLoad: false,
        checkBlogs: [],
        selectedContent: {},
        isEditingStatus: false,
        warningModalStatus: false,
        addNewBlogActive: false,
        isDisplayMember: false
    },
    reducers: {
        setCurrentContent(state, action) {
            state.selectedContent = action.payload;
        },
        modifySearchTerm(state, action) {
            state.searchTerm = action.payload;
            state.filteredBlogData = filterBlogsHelper(state.blogData, state.selectedBlogTypes, state.searchTerm);
            state.selectedContent = state.filteredBlogData.length > 0 ? state.filteredBlogData[0] : null;
            state.scrollTop = true;
        },
        filterOptions(state, action) {
            console.log(action.payload);
        },
        setEditStatus(state, action) {
            state.isEditingStatus = action.payload;
        },

        searchContent(state, action) {
            state.searchTerm = action.payload;
            state.filteredBlogData = filterBlogsHelper(state.blogData, state.checkBlogs, state.searchTerm);
            state.isSearchActive = state.searchTerm.length !== 0 ? true : false;
            state.selectedContent = state.filteredBlogData.length > 0 ? state.filteredBlogData[0] : null;
        },
        modifyBlogDetails(state, action) {
            const filterData = state.filteredBlogData.filter(blog => blog.title !== state.selectedContent.title);
            const blogData = state.blogData.filter(blog => blog.title !== state.selectedContent.title);
            const modifiedBlog = { ...state.selectedContent, ...action.payload };
            state.selectedContent = modifiedBlog;
            state.filteredBlogData = [modifiedBlog, ...filterData];
            state.blogData = [modifiedBlog, ...blogData];
            state.isEditingStatus = false;
        },
        setWarningModalStatus(state, action) {
            state.warningModalStatus = action.payload;
        },
        setAddNewBlogStatus(state, action) {
            state.addNewBlogActive = action.payload;

        },
        setDisplayMembers(state, action) {
            state.isDisplayMember = action.payload;
        },
        addNewBlog(state, action) {
            const newBlog = { ...action.payload };
            if (!state.filters.includes(newBlog.type.toLocaleLowerCase())) {
                state.filters.push(newBlog.type.toLocaleLowerCase());
                state.checkBlogs.push(newBlog.type)
            }
            // state.selectedContent = { ...newBlog };
            state.blogData.unshift(newBlog);
            state.filteredBlogData=filterBlogsHelper(state.blogData, state.checkBlogs, state.searchTerm)
            state.selectedContent = state.filteredBlogData.length > 0 ? state.filteredBlogData[0] : null;
    
        },
        toggleFilter(state, action) {
            const index = state.checkBlogs.indexOf(action.payload);
            index === -1 ? state.checkBlogs.push(action.payload) : state.checkBlogs.splice(index, 1);
            state.filteredBlogData = filterBlogsHelper(state.blogData, state.checkBlogs, state.searchTerm);
            state.selectedContent = state.filteredBlogData.length > 0 ? state.filteredBlogData[0] : null;
            state.scrollTop = true;
        },
        updateLoaderStatus(state, action) {
            state.isLoad = action.payload;
        }
    },

    extraReducers: builder => {
        builder.addCase(getBlogs.pending, (state, action) => {
        });
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.blogData = action.payload;
            state.filteredBlogData = state.blogData;


            state.blogData.forEach(ele => {
                if (!state.filters.includes(ele.type)) {
                    state.filters.push(ele.type);
                    state.checkBlogs.push(ele.type);
                }
            });
            state.selectedContent = state.filteredBlogData[0];
            state.isLoad = true;
        });
    }


})

export const { updateLoaderStatus, searchContent, toggleFilter, setCurrentContent, setDisplayMembers, setEditStatus, modifyBlogDetails, setWarningModalStatus, addNewBlog, setAddNewBlogStatus } = blogSlice.actions;
export default blogSlice.reducer;