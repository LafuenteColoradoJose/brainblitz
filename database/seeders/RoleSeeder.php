<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role_admin = Role::create(['name' => 'admin']);
        $role_user = Role::create(['name' => 'user']);

        $permission_create_role = Permission::create(['name' => 'create roles']);
        $permission_read_role = Permission::create(['name'=> 'read roles']);
        $permission_update_role = Permission::create(['name'=> 'update roles']);
        $permission_delete_role = Permission::create(['name'=> 'delete roles']);

        $permission_create_level = Permission::create(['name' => 'create levels']);
        $permission_read_level = Permission::create(['name'=> 'read levels']);
        $permission_update_level = Permission::create(['name'=> 'update levels']);
        $permission_delete_level = Permission::create(['name'=> 'delete levels']);

        $permission_created_user = Permission::create(['name' => 'create users']);
        $permission_read_user = Permission::create(['name'=> 'read users']);
        $permission_update_user = Permission::create(['name'=> 'update users']);
        $permission_delete_user = Permission::create(['name'=> 'delete users']);


        $permissions_admin = [
            $permission_create_role,
            $permission_read_role,
            $permission_update_role,
            $permission_delete_role,
            $permission_create_level,
            $permission_read_level,
            $permission_update_level,
            $permission_delete_level,
            $permission_read_user
        ];

        $permissions_user = [
            $permission_read_user,
            $permission_update_user,
            $permission_delete_user,

            $permission_read_role,
            $permission_read_level,
        ];

        $role_admin->syncPermissions($permissions_admin);
        $role_user->syncPermissions($permissions_user);


    }
}
