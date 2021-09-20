
const User = require('../model/user');
const authConstant = require('../constants/authConstant');
const Role = require('../model/role');
const ProjectRoute = require('../model/projectRoute');
const RouteRole = require('../model/routeRole');
const UserRole = require('../model/userRole');
const { replaceAll } = require('../utils/common');

async function seedRole () {
  try {
    const roles = [ 'User', 'Admin', 'SYSTEM_USER' ];
    for (let i = 0; i < roles.length; i++) {
      let result = await Role.findOne({
        name: roles[i],
        isActive: true,
        isDeleted: false 
      });
      if (!result) {
        await Role.create({
          name: roles[i],
          code: roles[i].toUpperCase(),
          weight: 1
        });
      }
    };
    console.info('Role model seeded 🍺');
  } catch (error){
    console.log('Role seeder failed.');
  }
}
async function seedProjectRoutes (routes) {
  try {
    if (routes && routes.length) {
      for (let i = 0; i < routes.length; i++) {
        const routeMethods = routes[i].methods;
        for (let j = 0; j < routeMethods.length; j++) {
          const routeObj = {
            uri: routes[i].path.toLowerCase(),
            method: routeMethods[j],
            route_name: `${replaceAll((routes[i].path).toLowerCase().substring(1), '/', '_')}`,
            isActive: true, 
            isDeleted: false
          };
          let result = await ProjectRoute.findOne(routeObj);
          if (!result) {
            await ProjectRoute.create(routeObj);
          }
        }
      }
      console.info('ProjectRoute model seeded 🍺');
    }
  } catch (error){
    console.log('ProjectRoute seeder failed.');
  }
}
async function seedRouteRole () {
  try {
    const routeRoles = [ 
      {
        route: '/admin/employee/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/employee/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/employee/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/employee/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/employee/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/employee/list',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/employee/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/employee/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/employee/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/employee/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/employee/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/employee/:id',
        role: 'SYSTEM_USER',
        method: 'GET' 
      },
      {
        route: '/admin/employee/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/employee/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/employee/count',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/employee/update/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/employee/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/employee/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/employee/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/employee/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/employee/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/employee/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/employee/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/employee/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/employee/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/employee/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/admin/employee/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/user/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/user/create',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/user/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/user/list',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/user/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/user/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/user/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/user/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/user/:id',
        role: 'SYSTEM_USER',
        method: 'GET' 
      },
      {
        route: '/admin/user/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/user/count',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/user/update/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/user/update/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/user/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT' 
      },
      {
        route: '/admin/user/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/user/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/user/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/user/softdelete/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/user/softdelete/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/user/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/user/softdeletemany',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/user/softdeletemany',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/user/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/admin/user/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/user/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/admin/user/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST' 
      },
      {
        route: '/admin/user/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT' 
      },
      {
        route: '/device/api/v1/employee/create',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/employee/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/employee/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/employee/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/employee/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/employee/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/employee/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/employee/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/employee/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/employee/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/employee/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/employee/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/device/api/v1/employee/count',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/employee/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/employee/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/employee/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/employee/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/employee/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/employee/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/employee/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/employee/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/employee/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/employee/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/employee/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/employee/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/employee/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/employee/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/create',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/list',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/aggregate',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'SYSTEM_USER',
        method: 'GET'
      },
      {
        route: '/device/api/v1/user/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/count',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/delete/:id',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/deletemany',
        role: 'SYSTEM_USER',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/addbulk',
        role: 'SYSTEM_USER',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/updatebulk',
        role: 'SYSTEM_USER',
        method: 'PUT'
      },

    ];
    if (routeRoles && routeRoles.length) {
      for (let i = 0; i < routeRoles.length; i++) {
        let route = await ProjectRoute.findOne({
          uri: routeRoles[i].route.toLowerCase(),
          method: routeRoles[i].method,
          isActive: true,
          isDeleted: false 
        }, { id: 1 });
        let role = await Role.findOne({
          code: (routeRoles[i].role).toUpperCase(),
          isActive: true,
          isDeleted: false 
        }, { id: 1 });
        if (route && route.id && role && role.id) {
          let routeRoleObj = await RouteRole.findOne({
            roleId: role.id,
            routeId: route.id,
            isActive: true, 
            isDeleted: false
          });
          if (!routeRoleObj) {
            await RouteRole.create({
              roleId: role.id,
              routeId: route.id
            });
          }
        }
      };
      console.info('RouteRole model seeded 🍺');
    }
  } catch (error){
    console.log('RouteRole seeder failed.');
  }
}
async function seedUserRole (){
  try {
    let user = await User.findOne({
      'email':'Colleen.Hackett@hotmail.com',
      'isActive':true,
      'isDeleted':false
    });
    let userRole = await Role.findOne({ code: 'SYSTEM_USER' }, { id: 1 });
    if (user && user.isPasswordMatch('86ZI7niwVGP4Efh') && userRole){
      let count = await UserRole.countDocuments({
        userId: user.id,
        roleId: userRole.id,
        isActive: true, 
        isDeleted: false
      });
      if (count == 0) {
        await UserRole.create({
          userId: user.id,
          roleId: userRole.id 
        });
        console.info('user seeded 🍺');
      }   
    }
    let admin = await User.findOne({
      'email':'Adrien.Toy@yahoo.com',
      'isActive':true,
      'isDeleted':false
    });
    let adminRole = await Role.findOne({ code: 'SYSTEM_USER' }, { id: 1 });
    if (admin && admin.isPasswordMatch('tt2kee2BuWMfGXx') && adminRole){
      let count = await UserRole.countDocuments({
        userId: admin.id,
        roleId: adminRole.id,
        isActive: true, 
        isDeleted: false
      });
      if (count == 0) {
        await UserRole.create({
          userId: admin.id,
          roleId: adminRole.id 
        });
        console.info('admin seeded 🍺');
      }   
    }
  } catch (error){
    console.log('UserRole seeder failed.');
  }
}
async function seedUser () {
  try {
    let user = await User.findOne({
      'email':'Colleen.Hackett@hotmail.com',
      'isActive':true,
      'isDeleted':false
    });
    if (!user || !user.isPasswordMatch('86ZI7niwVGP4Efh') ) {
      let user = new User({
        password:'86ZI7niwVGP4Efh',
        email:'Colleen.Hackett@hotmail.com',
        role:authConstant.USER_ROLE.User
      });
      await User.create(user);
    }
    let admin = await User.findOne({
      'email':'Adrien.Toy@yahoo.com',
      'isActive':true,
      'isDeleted':false
    });
    if (!admin || !admin.isPasswordMatch('tt2kee2BuWMfGXx') ) {
      let admin = new User({
        password:'tt2kee2BuWMfGXx',
        email:'Adrien.Toy@yahoo.com',
        role:authConstant.USER_ROLE.Admin
      });
      await User.create(admin);
    }
    console.info('Users seeded 🍺');
  } catch (error){
    console.log('User seeder failed.');
  }
}
async function seedData (allRegisterRoutes){
  await seedUser();
  await seedRole();
  await seedProjectRoutes(allRegisterRoutes);
  await seedRouteRole();
  await seedUserRole();
}     

module.exports = seedData;