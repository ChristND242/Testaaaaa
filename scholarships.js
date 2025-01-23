var itemslist = [
    {'id': '20251', 'city': 'Beijing', 'degree': 'Bachelor', 'teaching_language': 'English', 'program_name': 'Computer Science', 'intake': 'September', 'deadline': 'April 30', 'type': 'Full Scholarship'},
    {'id': '20252', 'city': 'Beijing', 'degree': 'Master', 'teaching_language': 'English', 'program_name': 'Business Administration', 'intake': 'September', 'deadline': 'April 30', 'type': 'Partial Scholarship'},
    {'id': '20253', 'city': 'Beijing', 'degree': 'PhD', 'teaching_language': 'English', 'program_name': 'Environmental Engineering', 'intake': 'September', 'deadline': 'April 30', 'type': 'Full Scholarship'},
    {'id': '20254', 'city': 'Nanjing', 'degree': 'Bachelor', 'teaching_language': 'English', 'program_name': 'Civil Engineering', 'intake': 'September', 'deadline': 'May 31', 'type': 'Partial Scholarship'},
    {'id': '20255', 'city': 'Nanjing', 'degree': 'Master', 'teaching_language': 'Chinese', 'program_name': 'Architecture', 'intake': 'September', 'deadline': 'May 31', 'type': 'Full Scholarship'},
    {'id': '20256', 'city': 'Wuhan', 'degree': 'Bachelor', 'teaching_language': 'English', 'program_name': 'Software Engineering', 'intake': 'September', 'deadline': 'June 30', 'type': 'Full Scholarship'},
    {'id': '20257', 'city': 'Shanghai', 'degree': 'PhD', 'teaching_language': 'Chinese', 'program_name': 'Marine Biology', 'intake': 'September', 'deadline': 'May 31', 'type': 'Partial Scholarship'},
    {'id': '20258', 'city': 'Hangzhou', 'degree': 'Master', 'teaching_language': 'English', 'program_name': 'Data Science', 'intake': 'September', 'deadline': 'June 30', 'type': 'Full Scholarship'},
    {'id': '20259', 'city': 'Guangzhou', 'degree': 'Bachelor', 'teaching_language': 'English', 'program_name': 'Economics', 'intake': 'September', 'deadline': 'June 30', 'type': 'Partial Scholarship'},
    {'id': '20260', 'city': 'Chengdu', 'degree': 'Master', 'teaching_language': 'Chinese', 'program_name': 'Mechanical Engineering', 'intake': 'September', 'deadline': 'June 30', 'type': 'Full Scholarship'},
    {'id': '20261', 'city': 'Xi\'an', 'degree': 'Bachelor', 'teaching_language': 'English', 'program_name': 'Computer Science', 'intake': 'September', 'deadline': 'June 30', 'type': 'Full Scholarship'},
    {'id': '20262', 'city': 'Tianjin', 'degree': 'Master', 'teaching_language': 'English', 'program_name': 'Business Administration', 'intake': 'September', 'deadline': 'June 30', 'type': 'Partial Scholarship'},
    {'id': '20263', 'city': 'Shenyang', 'degree': 'PhD', 'teaching_language': 'English', 'program_name': 'Mathematics', 'intake': 'September', 'deadline': 'June 30', 'type': 'Full Scholarship'},
    {'id': '20264', 'city': 'Jinan', 'degree': 'Bachelor', 'teaching_language': 'Chinese', 'program_name': 'Economics', 'intake': 'September', 'deadline': 'June 30', 'type': 'Partial Scholarship'},
    {'id': '20265', 'city': 'Changsha', 'degree': 'Master', 'teaching_language': 'English', 'program_name': 'Data Science', 'intake': 'September', 'deadline': 'June 30', 'type': 'Full Scholarship'},
    {'id': '20266', 'city': 'Harbin', 'degree': 'PhD', 'teaching_language': 'Chinese', 'program_name': 'Architecture', 'intake': 'September', 'deadline': 'June 30', 'type': 'Partial Scholarship'},
    {'id': '20267', 'city': 'Nanchang', 'degree': 'Bachelor', 'teaching_language': 'English', 'program_name': 'International Relations', 'intake': 'September', 'deadline': 'June 30', 'type': 'Full Scholarship'},
    {'id': '20268', 'city': 'Kunming', 'degree': 'Master', 'teaching_language': 'Chinese', 'program_name': 'Biotechnology', 'intake': 'September', 'deadline': 'June 30', 'type': 'Partial Scholarship'},
    {'id': '20269', 'city': 'Dalian', 'degree': 'Bachelor', 'teaching_language': 'English', 'program_name': 'Software Engineering', 'intake': 'September', 'deadline': 'June 30', 'type': 'Full Scholarship'},
    {'id': '20270', 'city': 'Suzhou', 'degree': 'Master', 'teaching_language': 'Chinese', 'program_name': 'Mechanical Engineering', 'intake': 'September', 'deadline': 'June 30', 'type': 'Partial Scholarship'},
    {'id': '20271', 'city': 'Hefei', 'degree': 'PhD', 'teaching_language': 'English', 'program_name': 'Physics', 'intake': 'September', 'deadline': 'June 30', 'type': 'Full Scholarship'},
    {'id': '20272', 'city': 'Qingdao', 'degree': 'Bachelor', 'teaching_language': 'English', 'program_name': 'Chemical Engineering', 'intake': 'September', 'deadline': 'June 30', 'type': 'Partial Scholarship'},
    {'id': '20273', 'city': 'Zhuhai', 'degree': 'Master', 'teaching_language': 'Chinese', 'program_name': 'Environmental Science', 'intake': 'September', 'deadline': 'June 30', 'type': 'Full Scholarship'},
    {'id': '20274', 'city': 'Haikou', 'degree': 'PhD', 'teaching_language': 'English', 'program_name': 'Marine Biology', 'intake': 'September', 'deadline': 'June 30', 'type': 'Partial Scholarship'},
    {'id': '20275', 'city': 'Xiamen', 'degree': 'Bachelor', 'teaching_language': 'Chinese', 'program_name': 'Economics', 'intake': 'September', 'deadline': 'June 30', 'type': 'Full Scholarship'},
    {'id': '20276', 'city': 'Fuzhou', 'degree': 'Master', 'teaching_language': 'English', 'program_name': 'International Business', 'intake': 'September', 'deadline': 'June 30', 'type': 'Partial Scholarship'},
    {'id': '20277', 'city': 'Urumqi', 'degree': 'PhD', 'teaching_language': 'Chinese', 'program_name': 'Cultural Studies', 'intake': 'September', 'deadline': 'June 30', 'type': 'Full Scholarship'},
    {'id': '20278', 'city': 'Lanzhou', 'degree': 'Bachelor', 'teaching_language': 'English', 'program_name': 'Electrical Engineering', 'intake': 'September', 'deadline': 'June 30', 'type': 'Partial Scholarship'},
    {'id': '20279', 'city': 'Yinchuan', 'degree': 'Master', 'teaching_language': 'Chinese', 'program_name': 'Agricultural Science', 'intake': 'September', 'deadline': 'June 30', 'type': 'Full Scholarship'},
    {'id': '20280', 'city': 'Hohhot', 'degree': 'PhD', 'teaching_language': 'English', 'program_name': 'Veterinary Science', 'intake': 'September', 'deadline': 'June 30', 'type': 'Partial Scholarship'},
    {'id': '20281', 'city': 'Ningbo', 'degree': 'Bachelor', 'teaching_language': 'Chinese', 'program_name': 'Logistics', 'intake': 'September', 'deadline': 'June 30', 'type': 'Full Scholarship'},
    {'id': '20282', 'city': 'Wenzhou', 'degree': 'Master', 'teaching_language': 'English', 'program_name': 'Public Health', 'intake': 'September', 'deadline': 'June 30', 'type': 'Partial Scholarship'},
    {'id': '20283', 'city': 'Zhengzhou', 'degree': 'PhD', 'teaching_language': 'Chinese', 'program_name': 'Education', 'intake': 'September', 'deadline': 'June 30', 'type': 'Full Scholarship'},
    {'id': '20284', 'city': 'Taiyuan', 'degree': 'Bachelor', 'teaching_language': 'English', 'program_name': 'Mechanical Engineering', 'intake': 'September', 'deadline': 'June 30', 'type': 'Partial Scholarship'},
    {'id': '20285', 'city': 'Changchun', 'degree': 'Master', 'teaching_language': 'Chinese', 'program_name': 'Artificial Intelligence', 'intake': 'September', 'deadline': 'June 30', 'type': 'Full Scholarship'},
    {'id': '20286', 'city': 'Guiyang', 'degree': 'PhD', 'teaching_language': 'English', 'program_name': 'Urban Planning', 'intake': 'September', 'deadline': 'June 30', 'type': 'Partial Scholarship'},
    {'id': '20287', 'city': 'Hua\'ian', 'degree': 'Master', 'teaching_language': 'English', 'program_name': 'Food Science and Engineering', 'intake': 'September', 'deadline': 'June 30', 'type': 'Full Scholarship'},
    {'id': '20288', 'city': 'Zhenjiang', 'degree': 'Master', 'teaching_language': 'English', 'program_name': 'Linguistics', 'intake': 'September', 'deadline': 'June 30', 'type': 'Full Scholarship'},
    {'id': '20289', 'city': 'Zhenjiang', 'degree': 'Bachelor', 'teaching_language': 'English', 'program_name': 'Computer Science', 'intake': 'September', 'deadline': 'April 30', 'type': 'Full Scholarship'},
    {'id': '20290', 'city': 'Changzhou', 'degree': 'Language', 'teaching_language': 'English', 'program_name': 'Chinese Language', 'intake': 'September', 'deadline': 'June 30', 'type': 'Partial Scholarship'},
    {'id': '20291', 'city': 'Yangzhou', 'degree': 'Language', 'teaching_language': 'English', 'program_name': 'Chinese Language', 'intake': 'March', 'deadline': '15-Feb', 'type': 'Partial Scholarship'},
    {'id': '20292', 'city': 'Zhenjiang', 'degree': 'Master', 'teaching_language': 'English', 'program_name': 'Electrical Engineering', 'intake': 'September', 'deadline': 'June 30', 'type': 'Full Scholarship'},
    {'id': '20293', 'city': 'Zhenjiang', 'degree': 'Bachelor', 'teaching_language': 'English', 'program_name': 'Electrical Engineering', 'intake': 'September', 'deadline': 'June 30', 'type': 'Full Scholarship'}
]
  
var array = []
var array_lenght = 0;
var table_size = 5;
var start_index = 1;
var end_index = 0;
var current_page = 1;
var max_page = 0;

function preLoadCalculations() {
    searchTable()
    
    array_lenght = array.length
    max_page = array_lenght / table_size

    if ((array_lenght % table_size) > 0) {
        max_page ++
    }
}

function searchTable() {
    var search_text = $("#search_text").val()
    if (search_text != "") {
        temp_array = itemslist.filter(function(object) {
            return object.item.toString().includes(search_text)
                || object.item.toUppercase().includes(search_text.toUppercase())
                || object.item.toString().includes(search_text)
                || object.item.toString().includes(search_text)

        })
        
    }else{
        array = itemslist
    }
    
}

function displayIndexButtons() {
    preLoadCalculations()
    $(".pagination_buttons button").remove()
    $(".pagination_buttons").append('<button id="btn" onclick="prev()">Prev</button>')
    for (var i = 1; i <= max_page; i++) {
        $(".pagination_buttons").append('<button id="btn" onclick="indexPagination('+i+')" index="'+i+'">'+i+'</button>')
    }


    $(".pagination_buttons").append('<button id="btn" onclick="next()">Next</button>')
    hightlightIndexButton()
}

function hightlightIndexButton() {
    start_index = (current_page - 1) * table_size + 1
    end_index = start_index + table_size - 1
    if (end_index > array_lenght) {
        end_index = array_lenght
    }
    $(".pagination span").text("Showing " + start_index + " to " + end_index + " of " + array_lenght + " entries")
    $(".pagination_buttons button").removeClass("active")
    $(".pagination_buttons button[index='"+current_page+"']").addClass("active") // highlight the current page

    displaytablerows()
}

function displaytablerows() {
    $(".container table tbody tr").remove()
    var tab_start = start_index - 1
    var tab_end = end_index
    for (var i = tab_start; i < tab_end; i++) {
        var tr = '<tr><td>'+array[i].id+'</td><td>'+array[i].city+'</td><td>'+array[i].degree+'</td><td>'+array[i].teaching_language+'</td><td>'+array[i].program_name+'</td><td>'+array[i].intake+'</td><td>'+array[i].deadline+'</td><td>'+array[i].type+'</td></tr>'
        $(".container table tbody").append(tr)
    }
}

displayIndexButtons()

function next () {
    if (current_page < max_page) {
        current_page++
        hightlightIndexButton()
    }
}

function prev () {
    if (current_page > 1) {
        current_page--
        hightlightIndexButton()
    }
}

function indexPagination (index) {
    current_page = parseInt(index)
    hightlightIndexButton() 
}

$("#table_size").change(function(){ // when the user selects a new number of rows to display
    table_size = parseInt($(this).val())
    current_page = 1
    start_index = 1
    displayIndexButtons()
})

$("#search_btn").click(function(){
    current_page = 1
    start_index = 1
    displayIndexButtons()
})
