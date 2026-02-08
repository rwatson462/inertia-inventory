<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController
{
    public function __invoke()
    {
        $user = Auth::user();

        // this doesn't load the relation into the user object
        $items = $user->inventoryItems()->get();

        return Inertia::render('Dashboard', [
            'user' => $user,
            'items' => $items,
            'links' => [
                'items' => [
                    'create' => route('items.create'),
                ]
            ]
        ]);
    }
}
