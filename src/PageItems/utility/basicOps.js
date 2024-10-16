export default function basicOps(products, searchTerm, sortDir, currCategory, pageNum, pageSize){
    let filterdArr = products;
    if(searchTerm != ""){
        filterdArr = filterdArr.filter((product)=>{
            let lowerSearchTerm = searchTerm.toLowerCase();
            let lowerTitle = product.title.toLowerCase();
            return lowerTitle.includes(lowerSearchTerm);
        })
    }

    let filteredSortedArr = filterdArr;
    if(sortDir != 0){
        if(sortDir == 1){
            filteredSortedArr = filteredSortedArr.sort(inComparator);
        }else{
            filteredSortedArr = filteredSortedArr.sort(decComparator);
        }
    }

    let filteredSortedgroupByArr = filteredSortedArr;
    if (currCategory != "All Categories"){
        //console.log('executed for ${currCategory}');
        filteredSortedgroupByArr = filteredSortedgroupByArr.filter((product)=>{
            return product.category == currCategory;
        })
        //console.log(filteredSortedgroupByArr);
    }

    
    let totalPages = Math.ceil(filteredSortedgroupByArr.length / pageSize);
    let sidx = (pageNum - 1) * pageSize;
    let eidx = sidx + pageSize;
    filteredSortedgroupByArr = filteredSortedgroupByArr.slice(sidx,eidx);


    return {filteredSortedgroupByArr, totalPages};
}

function inComparator(product1,product2){
    if(product1.price > product2.price){
        return 1
    }else{
        return -1
    }
}

function decComparator(product1,product2){
    if(product1.price < product2.price){
        return 1
    }else{
        return -1
    }
}



