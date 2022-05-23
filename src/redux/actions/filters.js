
// export const setSortBy = ({ type, order }) => ({
//   type: 'SET_SORT_BY',
//   payload: { type, order },
// });


export const setSortBy=(name) => ({
	type: 'SET_SORT_BY',
	payload: name,
});

export const setCategory =(catIndex) => ({
	type: 'SET_CATEGORY',
	payload: catIndex,
});