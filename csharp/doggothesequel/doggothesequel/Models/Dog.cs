﻿using DogGo.Models;

namespace doggothesequel.Models
{
    public class Dog
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Breed { get; set; }
        public int OwnerId { get; set; }
        public Owner owner { get; set; }
        public string ImageUrl { get; set; }
        public string Notes { get; set; }

    }
}
