import './App.css';

function Todo() {
  return (
    <div>
      <h1>Shopping list</h1>
        <div className="container">

            <div className="left">
                <form id="form">
                    <label for="post">What do we need to buy?</label>
                    <br />
                    <textarea name="post" id="input" cols="30" rows="10"></textarea>
                    <br />
                    <div id="msg"></div>
                    <button type="submit">Post</button>
                </form>
            </div>
            <div className="right">
                <h3>List</h3>
                <div id="posts">
                    <div>
                        <p></p>
                        <span class="options">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash-alt"></i>
                        </span>
                    </div>

                    <div>
                        <p></p>
                        <span class="options">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash-alt"></i>
                        </span>
                    </div>
                </div>
          </div>
        </div>
    </div>
  );
}

export default Todo;
