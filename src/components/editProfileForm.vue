<template>
  <div>
    <h1>Edit Profile</h1>
    <div class="profile-form-wrapper">
      <form>
        <div class="img-wrapper">
          <div class="image-preview" v-if="imageData.length > 0">
            <img class="preview" :src="imageData" />
          </div>
          <div>
            <input
              class="img-upload"
              type="file"
              @change="previewImage"
              accept="image/*"
              placeholder="  Upload an image file:"
            />
          </div>
        </div>

        <label class="form-label">Company Name</label>
        <input
          type="text"
          class="input-container"
          v-model="userData.companyname"
        />
        <label class="form-label">Email Address</label>
        <input type="email" class="input-container" v-model="userData.email" />

        <label class="form-label">Old Password</label>
        <input
          type="password"
          class="input-container"
          v-model="userData.oldPassword"
        />

        <label class="form-label">New Password</label>
        <input
          type="password"
          class="input-container"
          v-model="userData.newPassword"
        />

        <label class="form-label">Confirm Password</label>
        <input
          type="password"
          class="input-container"
          v-model="userData.confirmPassword"
        />

        <button class="update-btn" @click.prevent="update">
          <h2>Update</h2>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      userData: {
        companyname: "",
        email: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
      imageData: "",
    };
  },
  methods: {
    previewImage: function (event) {
      var input = event.target;

      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>

<style scoped>
.img-wrapper {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  width: 200px;
  margin-top: 25px;
}
.file-upload-form,
.image-preview {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

  /* Gray 6 */
  background: #f2f2f2;
  border: 1px dashed #e0e0e0;
  border-radius: 4px;
  padding: 20px;
}
img.preview {
  background-color: white;
  border: 1px solid #ddd;
}
.preview {
  width: 150px;
}
h1 {
  /* Dashboard */
  margin: 32px 217px 24px 24px;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */
  display: flex;
  align-items: flex-end;
  color: #1a1a1a;
}
form {
  width: 375px;
  display: flex;
  flex-direction: column;
  padding-left: 24px;
}
.profile-form-wrapper {
  margin: 24px;
  background: white;
  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  margin: 25px;
  margin-bottom: 55px;
}

.form-label {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  padding-top: 24px;

  color: #1a1a1a;
}
.input-container {
  width: 320px;
  height: 50px;
  margin-top: 8px;
  font-size: large;
  background: #e8e8e8;
  border: initial;
  border-radius: 12px;
}
.update-btn {
  margin-bottom: 24px;
  margin-top: 32px;
  width: 320px;
  height: 50px;
  padding: 0;
  background: #d90429;
  box-shadow: 0px 6px 28px 5px rgba(254, 45, 23, 0.3);
  border-radius: 12px;
  border: initial;
  cursor: pointer;
}
.update-btn h2 {
  padding: 0px 127px 0px 127px;
  margin: 0px;
  padding-top: 14px;
  padding-bottom: 11px;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
}
</style>
