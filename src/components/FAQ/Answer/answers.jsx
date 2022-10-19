import React from 'react';
import classes from './answers.module.css'
import { Img } from '../../AllPng/AllPng.tsx'

const Answers = () => {

return(
	
	<div className={classes.wrapper}>
		<div id={1} className={classes.answer_wrapper}>
			<div ><p className={classes.answer}><strong>BUY</strong> Как правильно ставить таски в ASANA?</p></div>
			<br/> 
			<br/>
			<div className={classes.line}>
			<div className={classes.wrap}>
			<div className={classes.txt}>
				<strong>
				ОБЯЗАТЕЛЬНО
			  </strong>
			</div>
			<p>
      добавлять к каждой задаче какие-либо: 
      референсы — видео, картинки, схемы
      гайдлайны, логотипы оффера, брендбуки (если имеются)
      </p>
			</div> 
			</div>
			<div className={classes.option}>
				<div className={classes.txt}>
					<strong>ВАРИАНТ №1</strong>
					<br/>
					<p className={classes.descrip}>| через форму в ASANA — для видео креативов и статики</p>
					</div>
			<br/>
			<nav className={classes.punkt}>
				<li>
			   Переходим <strong><a href='https://form.asana.com/?k=3ZXzQdLy1Dinsdc3XrnDJw&d=931633599820594' >по ссылке на форму в ASANA</a></strong>
				</li>
				<br/>
				<li>
				Максимально подробно заполняем все поля (чем более подробно вы опишите задачу, используя референсы, ссылки, картинки и тд, что отображает вашу идею, тем лучше и качественнее будет сделан креатив).
				</li>
				<br/>
				<li>
			  После заполнения задача добавится на доску в ASANA в колонку "ТЗ // Задачи".
				</li>
				<br/>
				<li>
				Кликаем на созданную нами задачу, проверяем — все ли правильно заполнено? Если где-то не хватает референсов и вложений, то к задаче можно загрузить дополнительные ссылки, файлы и тд.
				</li>
				<br/>
				<li>
				Написали об этом в наш чатик (RELIZ - AGENCY CREATIVES)
				<br/>
				<br/>
				<Img id="chat" className={classes.img} width={362} />
				</li>
				</nav>
			</div>
			<div className={classes.option}>
				<div className={classes.txt}><strong>ВАРИАНТ №2</strong><br/><p className={classes.descrip}>| через интерфейс ASANA — для видео креативов / статики / playable ads</p></div>
			<br/>
			<nav className={classes.punkt}>
				<li>
				Открываем интерфейс ASANA (представление "Доска")
				</li>
				<br/>
				<li>
				Нажимаем на + в колонке "ТЗ // Задачи" — "Добавить задачу"
				<br/>
				<br/>
				<Img id="addtask" className={classes.img} />
				</li>
				<br/>
				<li>
				Далее выбираем необходимый нам шаблон
				<br/>
				<br/>
				<Img id="sample" className={classes.sample} width={420}/><br/><br/>
				a. Если  ставим таск для Playable ads, то в графе "Проекты" добавляем "RELIZ x PLAYABLE ADS".<br/>
				<br/>
				<Img id="sampleAbs" className={classes.sampleAbs} width={420}/>
				</li>
				<br/>
				<li>
				Максимально подробно заполняем все поля (чем более подробно вы опишите задачу, используя референсы, ссылки, картинки и тд, что отображает вашу идею, тем лучше и качественнее будет сделан креатив).
				</li>
				<br/>
				<li>
				После заполнения задача добавится на доску в ASANA в колонку "ТЗ // Задачи".
				</li>
				<br/>
				<li>
				Кликаем на созданную нами задачу, проверяем — все ли правильно заполнено? Если где-то не хватает референсов и вложений, то к задаче можно загрузить дополнительные ссылки, файлы и тд. НЕ ЗАБЫВАЕМ ИЗМЕНИТЬ НАЗВАНИЕ ЗАДАЧИ
				</li>
				<br/>
				<li>
				Написали об этом в наш чатик (RELIZ - AGENCY CREATIVES)
				<br/>
				<br/>
				<Img id="chat" className={classes.img} width={362} />
				</li>
				</nav>
			</div>
		</div>
		<div id={2} className={classes.answer_wrapper}>
			<div ><p className={classes.answer}><strong>BUY&DES</strong> Как упорядочить загрузку видео креативов</p><br/><p className={classes.descrip}>| для видео креативов и статики и playable ads</p></div>
			<br/> 
			<br/>
			<div className={classes.option}>
			<nav className={classes.punkt}>
				<li>
				Заходим в нашу любимую <strong><a href='https://drive.google.com/drive/u/1/folders/1Mq2PfLiLpLxGunxkPimQv_C1SRt4vE6r'>папочку с креативами</a></strong> ever
				<br/>
				<br/>
				<Img id="creofolder" className={classes.img}  />
				</li>
				<br/>
				<li>
				Внутри каждой папки с оффером (если такой папки нет — создать) создаем папку в формате "Месяц_год" — например, "Июль_2022".
				</li>
				<br/>
				<li>
				Копируем ссылку на папку и добавляем ее в описание к задаче в ASANA в графе “загружать в эту папку” (в самом низу)
				<br/>
				<br/>
				<Img id="savecreo" className={classes.img}  />
				</li>
				<br/>
				<li>
			  Для Playable ads — то же самое, но заходим <strong><a href='https://drive.google.com/drive/folders/1kKZInNzl7ZdVC1eG4FKROHz2Yczp0ldE'>в эту папку</a></strong> и повторяем действия, начиная с пункта 2 + добавляем ссылку в задачу
				<br/>
				<br/>
				<Img id="play" className={classes.img} width={362} />
				</li>
				</nav>
			</div>
		</div>

		<div id={3} className={classes.answer_wrapper}>
			<div ><p className={classes.answer}><strong>DES</strong> Как правильно загружать креативы</p></div>
			<br/> 
			<br/>
			<div className={classes.option}>
			<nav className={classes.punkt}>
				<li>
				Загружаем ролики по ссылке в описании к задаче (см ниже)
				<br/>
				<br/>
				<Img id="savecreo" className={classes.img}  />
				</li>
				<br/>
				<li>
				Неймим файлы в формате "Оффер_месяцгод_размер", например, "ЛигаСтавок_июль2022_1080х1080"
				<br/>
				a. Если креатив делаем в нескольких вариациях, то после размера добавляем "v1/2/3" и тд, например, "ЛигаСтавок_июль2022_1080х1080_v1"
				</li>
				<br/>
				<li>
			  Обязательно в каждую папку с креативами загружаем проект в форматах *zip & *rar.
				</li>
				</nav>
			</div>
		</div>

		<div id={4} className={classes.answer_wrapper}>
			<div ><p className={classes.answer}><strong>BUY&DES</strong> ПОЛЕЗНАЯ ИНФОРМАЦИЯ</p></div>
			<br/> 
			<br/>
			<div className={classes.option}>
			<nav className={classes.punkt}>
				<li>
				Находится в одноименной  <strong><a href='https://app.asana.com/0/1200906577101217/1201879074554138/f' >колонке в ASANA</a></strong> (там есть брендбуки, гайдлайны и прочая полезная инфо)
				<br/>
				<br/>
			
				<br/>
				А также обратите внимание на блок "Useful information", который находится справа.
				</li>
				<br/>
				<li>
				Также <strong><a href='https://drive.google.com/drive/folders/1ssThFUl7uegLCkWHEFLmmqB-bc8MEhpm'>тут по ссылке</a></strong> у нас находятся некоторые проекты, которые могут помочь в работе (к сожалению, некоторые проекты не отсортированы), большая часть из них лежит в папки "беттинги"
				<br/>
				<br/>
				<Img id="betting" className={classes.img}  />
				</li>
				<br/>
				<li>
				<strong>FOR BUYERS</strong>— ребята, пожалуйста, добавляйте ссылки на приложения, пополняйте колонку в ASANA брендбуками и гайдлайнами.
				</li>
				</nav>
			</div>
		</div>
		
	</div>
	
);
}


export default Answers;

 