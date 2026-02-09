<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController
{
    public function __invoke()
    {
        // this doesn't load the relation into the user object
        $items = Auth::user()->inventoryItems()->get();

        return Inertia::render('Dashboard', [
            'items' => $items,
            'links' => [
                'items' => [
                    'create' => route('items.create'),
                ]
            ]
        ]);
    }
}
