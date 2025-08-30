import PG from "pg";

const userSchema = new PG.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    correo: {
      type: String,
      required: true,
      unique: true,
    },
    contrasena: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default PG.model("User", userSchema);
