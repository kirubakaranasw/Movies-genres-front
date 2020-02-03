import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from "./common/form";
import { saveGenre } from "./../services/genreService";

class GenreForm extends Form {
  state = {
    data: { name: "" },
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string()
      .required()
      .min(5)
      .label("Name")
  };

  doSubmit = async () => {
    await saveGenre(this.state.data);
    toast.success("Add successful!");
    this.props.history.push("/genres");
  };

  render() {
    return (
      <div>
        <h1>Genre Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default GenreForm;
