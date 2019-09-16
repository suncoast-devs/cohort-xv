using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace IMDB.Migrations
{
    public partial class AddMovieTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Movies",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Name = table.Column<string>(nullable: true),
                    Tagline = table.Column<string>(nullable: true),
                    ReleasedDate = table.Column<DateTime>(nullable: false),
                    Screenings = table.Column<int>(nullable: false),
                    PricePerTicket = table.Column<double>(nullable: false),
                    TotalRevenue = table.Column<double>(nullable: false),
                    Cost = table.Column<double>(nullable: false),
                    Budget = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movies", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Movies");
        }
    }
}
