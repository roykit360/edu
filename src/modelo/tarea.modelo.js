import PG from "pg";

const taskSchema = new PG.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: PG.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default PG.model("Task", taskSchema);
