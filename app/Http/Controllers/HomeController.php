<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('home', [
            'project' => [
                'columns' => [
                    [
                        'id'    => 1,
                        'name'  => 'First Column',
                    ],
                    [
                        'id'    => 2,
                        'name'  => 'Second Column',
                    ]
                ]
            ]
        ]);
    }

    public function put()
    {
        // dd('in put method');

        return back();
    }

    public function another()
    {
        return Inertia::render('another-page');
    }
}
