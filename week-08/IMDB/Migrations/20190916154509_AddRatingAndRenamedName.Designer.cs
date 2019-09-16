﻿// <auto-generated />
using System;
using IMDB;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace IMDB.Migrations
{
    [DbContext(typeof(MovieContext))]
    [Migration("20190916154509_AddRatingAndRenamedName")]
    partial class AddRatingAndRenamedName
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("IMDB.Movie", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("Budget");

                    b.Property<double>("Cost");

                    b.Property<double>("PricePerTicket");

                    b.Property<DateTime>("ReleasedDate");

                    b.Property<int>("RottenTomatoesRating");

                    b.Property<int>("Screenings");

                    b.Property<string>("Tagline");

                    b.Property<string>("Title");

                    b.Property<double>("TotalRevenue");

                    b.HasKey("Id");

                    b.ToTable("Movies");
                });
#pragma warning restore 612, 618
        }
    }
}
