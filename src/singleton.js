//the below const is set to an Immediately Invoked Function Expression (IIFE)
const singleton = function () {
  let adminUser;

  //The AdminUser class
  function AdminUser() {
    this.role = admin; // one of the property of AdminUser class
  }

  // the builder method that creates the adminUser
  function createAdmin() {
    adminUser = new AdminUser();
    return adminUser;
  }

  getAdminUser: () => {
    if (!adminUser) {
      adminUser = createAdmin();
      return adminUser;
    }
  };
};

const admin = singleton.getAdminUser;
const admin1 = singleton.getAdminUser;
//singleton.createAdmin() will through error as the same is not exposed to outside of the 

console.log(admin === admin1); //true states that only single bject is created.
