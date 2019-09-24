using Microsoft.EntityFrameworkCore.Migrations;

namespace homeworkreview.Migrations
{
    public partial class AddedRelationshipForLocationsandItems : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "LocationId",
                table: "ShopItems",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ShopItems_LocationId",
                table: "ShopItems",
                column: "LocationId");

            migrationBuilder.AddForeignKey(
                name: "FK_ShopItems_Locations_LocationId",
                table: "ShopItems",
                column: "LocationId",
                principalTable: "Locations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ShopItems_Locations_LocationId",
                table: "ShopItems");

            migrationBuilder.DropIndex(
                name: "IX_ShopItems_LocationId",
                table: "ShopItems");

            migrationBuilder.DropColumn(
                name: "LocationId",
                table: "ShopItems");
        }
    }
}
