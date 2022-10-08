async function my_function (tp,app,habit,completed) {
    const filetitle = tp.file.title
    const file = tp.file.find_tfile(filetitle) 
    const {update} = app.plugins.plugins["metaedit"].api
    if(completed == true) {
        completed = "✔️"
    } else if (completed == false) {
        completed = " "
    }
    await update(habit,completed,file)
    console.log("Finished")
	return ""
}
module.exports = my_function