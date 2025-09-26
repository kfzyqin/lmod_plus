// Fix sorting for complex table headers
(function() {
    // Wait for page to load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fixSorting);
    } else {
        fixSorting();
    }
    
    function fixSorting() {
        const table = document.getElementById('table1');
        if (!table) return;
        
        // Manually set up click handlers for sortable columns
        const sortableHeaders = [
            { selector: 'th[data-js-sort-colNum="2"]', col: 2 }, // Precision
            { selector: 'th[data-js-sort-colNum="3"]', col: 3 }, // Recall
            { selector: 'th[data-js-sort-colNum="4"]', col: 4 }, // F1
            { selector: 'th[data-js-sort-colNum="5"]', col: 5 }, // HC
            { selector: 'th[data-js-sort-colNum="6"]', col: 6 }, // Binary Acc
            { selector: 'th[data-js-sort-colNum="7"]', col: 7 }, // Multi-class Acc
            { selector: 'th[data-js-sort-colNum="8"]', col: 8 }  // Staging Assessment
        ];
        
        sortableHeaders.forEach(function(header) {
            const th = table.querySelector(header.selector);
            if (th) {
                th.style.cursor = 'pointer';
                th.addEventListener('click', function() {
                    sortTable(table, header.col);
                });
            }
        });
        
        console.log('Sorting handlers attached successfully');
    }
})();
