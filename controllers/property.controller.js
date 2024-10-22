import Auth from "../DataBase/auth.schema.js";
import Property from "../DataBase/property.schema.js";

export default class PropertyController {
  async addProperty(req, res) {
    const { name, location, type, pseudoprice, price, description } = req.body;

    try {
      // Create a new property
      const newProperty = new Property({
        name,
        location,
        type,
        pseudoprice,
        price,
        description,
      });
      console.log(name, location, type, pseudoprice, price, description);
      // Save the new property to the database
      await newProperty.save();

      // Find the user by req.userId
      
      return res.status(200).json({ message: "Property added successfully!" });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ message: "Something went wrong!" });
    }
  }
}
