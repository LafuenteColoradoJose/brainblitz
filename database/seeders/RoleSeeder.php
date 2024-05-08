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

        $permission_create_score = Permission::create(['name' => 'create scores']);
        $permission_read_score = Permission::create(['name'=> 'read scores']);
        $permission_update_scores = Permission::create(['name'=> 'update scores']);
        $permission_delete_score = Permission::create(['name'=> 'delete scores']);

        $permissions_admin = [
            $permission_create_role,
            $permission_read_role,
            $permission_update_role,
            $permission_delete_role,
            $permission_create_level,
            $permission_read_level,
            $permission_update_level,
            $permission_delete_level,
            $permission_create_score,
            $permission_read_score,
            $permission_update_scores,
            $permission_delete_score,

        ];

        $permissions_user = [
            $permission_read_role,
            $permission_read_level,
            $permission_read_score,
        ];

        $role_admin->syncPermissions($permissions_admin);
        $role_user->syncPermissions($permissions_user);


    }
}
