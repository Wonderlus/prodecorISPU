import { MigrationInterface, QueryRunner } from 'typeorm';
import * as ExcelJS from 'exceljs';
import { randomUUID } from 'crypto';
import * as moment from 'moment';

export class Data1716654377503 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const fileName1 = 'src/files/plumbing.xlsx';
    const fileName2 = 'src/files/doors.xlsx';

    const fileNames = [fileName1, fileName2];

    for (const fileName of fileNames) {
      const wb = new ExcelJS.Workbook();
      await wb.xlsx.readFile(fileName);

      const worksheets = wb.worksheets;

      for (const ws of worksheets) {
        const type = ws.name;

        if (type === 'Мебель') continue;

        ws.eachRow(async (row, rowNumber) => {
          if (rowNumber === 1) return;
          const productId = randomUUID();
          const name = ws.getCell(`A${rowNumber}`).value;
          const price = ws.getCell(`G${rowNumber}`).value || 0;
          const description = ws.getCell(`H${rowNumber}`).value || '';

          if (!name) return;

          await queryRunner.query(
            `
            insert into public.product
              (id, title, description, price, discount, type)
            values
              ('${productId}', $1, $5, $2, $3, $4)
    
            `,
            [name, price, 1, type.trim(), description],
          );

          const images = [
            ws.getCell(`B${rowNumber}`).value,
            ws.getCell(`C${rowNumber}`).value,
            ws.getCell(`D${rowNumber}`).value,
            ws.getCell(`E${rowNumber}`).value,
            ws.getCell(`F${rowNumber}`).value,
          ];

          for (const image of images) {
            const img = String(image);
            if (!img || !img.includes('http')) continue;
            await queryRunner.query(
              `
              insert into public.image
                (id, product_id, image, upload_time)
              values
                ($1, $2, $3, $4)
              `,
              [randomUUID(), productId, img, moment().toDate()],
            );
          }
        });
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`delete from public.product`);
  }
}
