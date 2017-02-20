var template = function () {
    return $('#' + id).html();
};

var peopleCollection = new PeopleCollection([
    {
        name : 'Rob',
        age : 20,
        job : 'Java Developer'
    },{
        name : 'Ivan',
        age : 23,
        job : 'C# Developer'
    },{
        name : 'Anton',
        age : 28,
        job : 'PM'
    }
]);