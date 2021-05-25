export const Task3 = () => {
    return(
        <div className='container'>
            <h1>Опросник</h1>
            <form id="vote" action="#" method="POST">
                <div id="content">
                    <div class="pattern">
                        <h4 class="question">Вопрос</h4>
                        <div class="answers">
                            <div class="radio"><label><input type="radio" name="poll"/>Вопрос</label></div>
                        </div>
                    </div>
                </div>
            <button type="submit" class="btn btn-default">Ответить</button>
            </form>
        </div>
    )
}