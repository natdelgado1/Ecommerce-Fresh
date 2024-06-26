const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      validate: {
        validator: (val) =>
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val),
        message: "Please enter a valid email",
      },
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (val) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-=_+{};:'",.<>/?[\]`|~]).{8,}$/.test(
            val
          ),
        message:
          "Password must have at least one uppercase, one lowercase, one number, one special character",
      },
    },
    nombreCompleto: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      min: 11,
    },
    role: {
      type: String,
      required: true,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true, versionKey: false }
);

  UserSchema.plugin(uniqueValidator, {
    message: "Email {VALUE} is already taken",
  });

  UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => (this._confirmPassword = value));
  UserSchema.pre("validate", function (next) {
    if (this.password !== this.confirmPassword) {
      this.invalidate("confirmPassword", "Password must match confirm password");
    }
    next();
  });

  //Antes de guardar verifica que el rol haya llegado como usuario
  UserSchema.pre("save", function (next) {
    this.role = "user";
    bcrypt.hash(this.password, 10).then((hash) => {
      this.password = hash;
      next();
    });
  });

  UserSchema.pre(["findOneAndUpdate"], async function (next) {
    const data = this.getUpdate();
    if (data.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(data.password, salt);
        data.password = hash;
        next();
      } catch (error) {
        next(error);
      }
    }
    next();
  });

const User = new mongoose.model("User", UserSchema);

module.exports = User;
