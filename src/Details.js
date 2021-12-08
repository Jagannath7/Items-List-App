import "./App.css";

function Details(props) {
  if (isNaN(props.item_number)) {
    var text = "";
    var header = "Watch an Image Here..!!";
    var title = "";
  } else {
    var text =
      "----->Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptate sit corporis numquam est possimus repudiandae labore eligendi dolore tempora beatae tenetur nulla consequuntur veritatis, dignissimos harum unde, eveniet eum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptate sit corporis numquam est possimus repudiandae labore eligendi dolore tempora beatae tenetur nulla consequuntur veritatis, dignissimos harum unde, eveniet eum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptate sit corporis numquam est possimus repudiandae labore eligendi dolore tempora beatae tenetur nulla consequuntur veritatis, dignissimos harum unde, eveniet eum!";
    var header = "Header";
    var title = "Title";
  }

  return (
    <div class="details">
      <div class="header">
        <h4>
          {header} {props.item_number}
        </h4>
      </div>

      <div class="title">
        <h5>
          {title} {props.item_number}
        </h5>
      </div>

      <img src={props.url} alt="" height="30%" />

      <p>
        {props.item_number} {text}
      </p>

      <p></p>
    </div>
  );
}

export default Details;
