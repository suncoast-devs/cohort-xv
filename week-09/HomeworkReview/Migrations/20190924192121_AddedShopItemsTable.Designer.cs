﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using homeworkreview;

namespace homeworkreview.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20190924192121_AddedShopItemsTable")]
    partial class AddedShopItemsTable
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("HomeworkReview.Models.ShopItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateOrdered");

                    b.Property<string>("Name");

                    b.Property<int>("NumberinStock");

                    b.Property<int>("Price");

                    b.Property<int>("SKU");

                    b.Property<string>("ShortDescription");

                    b.HasKey("Id");

                    b.ToTable("ShopItems");
                });
#pragma warning restore 612, 618
        }
    }
}