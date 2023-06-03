<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;

class SocialUserController extends Controller
{
    //
    public function redirect($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function handleCallback($provider)
    {
        $user = Socialite::driver($provider)->user();

        $existingUser = User::where('email', $user->getEmail())->first();

        if ($existingUser) {
            Auth::login($existingUser);
        } else {
            $newUser = User::create([
                'email' => $user->getEmail(),
                'password' => bcrypt(Str::random(24)),
                'provider' => $provider,
                'provider_id' => $user->getId(),
            ]);

            Auth::login($newUser);
        }

        return redirect(RouteServiceProvider::HOME);
    }
}
