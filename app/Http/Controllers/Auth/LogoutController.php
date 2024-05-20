<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\HasApiTokens;

class LogoutController extends Controller
{
    public function logoutUser() {
        $user = Auth::user();
        $user->tokens->each(function($token) {
            $token->delete();
        });

        return response()->json([
            'message' => 'Has salido de la cuenta',
        ], 200);
    }
}
