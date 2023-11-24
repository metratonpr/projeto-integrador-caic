<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    function states() : HasMany{
        return $this->hasMany(State::class);
    }

    function cities() : HasMany{
        return $this->hasMany(City::class);
    }

    function neighborhoods() : HasMany{
        return $this->hasMany(Neighborhood::class);
    }

    function zipcodes() : HasMany{
        return $this->hasMany(ZipCode::class);
    }

    function product_types() : HasMany{
        return $this->hasMany(ProductType::class);
    }

    function products() : HasMany{
        return $this->hasMany(Product::class);
    }

    function stores() : HasMany{
        return $this->hasMany(Store::class);
    }

    function budgets() : HasMany{
        return $this->hasMany(Budget::class);
    }

    function entities() : HasMany{
        return $this->hasMany(Entity::class);
    }

    function price_lists() : HasMany{
        return $this->hasMany(Entity::class);
    }
}
