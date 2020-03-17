export default (searchData, searchText) => {
    const initialData = searchData;
    let data = JSON.parse(JSON.stringify(initialData));
    data = data.filter(el => {
        return el.name.toLowerCase().includes(searchText.toLowerCase());
    });
    return data;
};
